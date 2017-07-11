//
//  IndexViewController.m
//  bearT2
//
//  Created by apple on 2017/7/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "IndexViewController.h"

@interface IndexViewController () <UITableViewDelegate, UITableViewDataSource>
{
  UITableView *_mainTableView;
  NSArray *_vcs;
}

@end

@implementation IndexViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  
  _vcs = @[
           @"OriginDemoTestVC",
           @"HelloWorldTestVC",
           @"GreetingVC",
           @"StufyStateVC",
           @"StudyStyleVC",
           @"StudyRelayVC",
           @"StudyFlexBoxVC",
           @"TextInputDealVC",
           @"StudyScrollViewVC",
           @"StudyFlatListVC",
           ];
  [self createUI];
}

- (void)createUI
{
  _mainTableView = [[UITableView alloc] initWithFrame:self.view.bounds];
  _mainTableView.delegate = self;
  _mainTableView.dataSource = self;
  [self.view addSubview:_mainTableView];
}

#pragma mark - DataSource
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
  UITableViewCell *cell = [UITableViewCell new];
  cell.textLabel.text = _vcs[indexPath.row];
  [cell.textLabel sizeToFit];
//  [cell.textLabel layoutSubviews];
  return cell;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
  return [_vcs count];
}

#pragma mark - Delegate
- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
  Class tempClass= NSClassFromString(_vcs[indexPath.row]);
  UIViewController *tempVC = [tempClass new];
  [self.navigationController pushViewController:tempVC animated:YES];
}

@end
