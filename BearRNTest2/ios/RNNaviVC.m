//
//  RNNaviVC.m
//  BearRNTest2
//
//  Created by apple on 2017/7/12.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNNaviVC.h"

@interface RNNaviVC ()

@end

@implementation RNNaviVC

- (void)viewDidLoad {
  [super viewDidLoad];
  
  [self crateUI];
}

- (void)crateUI
{
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"DemoFile/2-1StudyRNNav.ios" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"BearRNTest2"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  self.contentView = rootView;
  [self.view addSubview:self.contentView];
  
  self.contentView.frame = CGRectMake(0, 64, WIDTH, HEIGHT - 64);
  self.contentView.backgroundColor = [UIColor whiteColor];
}


@end
